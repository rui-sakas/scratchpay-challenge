import { createServer, Model, Response } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

import users from './users.json';

export function makeServer({ environment = 'test' } = {}) {
    let server = createServer({
        environment,
        models: {
            users: Model
        },

        //Create initial users
        seeds(server) {
            users.forEach((user) => {
                server.create('user', user);
            });
        },

        routes() {
            this.namespace = 'api/users';

            this.get('/', (schema, request) => {
                let { page, per_page } = request.queryParams;

                page = parseInt(page);
                per_page = parseInt(per_page);

                let allUsers = schema.users.all();

                let start = (page - 1) * per_page;
                let end = start + per_page;
                let slicedUsers = allUsers.slice(start, end);

                return {
                    users: slicedUsers.models,
                    page,
                    per_page,
                    totalUsers: allUsers.length
                };
            });

            this.get('/:id', (schema, request) => {
                let id = request.params.id;
                return schema.users.find(id);
            });

            this.post('/', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);

                if (hasDuplicatedEmail(schema.users.all(), attrs.email)) {
                    return new Response(
                        400,
                        { error: 'duplicated_email' },
                        { errors: ['duplicated email'] }
                    );
                }

                schema.users.create({ ...attrs, id: uuidv4() });
                return schema.users.all();
            });

            this.put('/:id', (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody);

                let id = request.params.id;
                let user = schema.users.find(id);

                if (
                    user.attrs.email !== newAttrs.email &&
                    hasDuplicatedEmail(schema.users.all(), newAttrs.email)
                ) {
                    return new Response(
                        400,
                        { error: 'duplicated_email' },
                        { errors: ['duplicated email'] }
                    );
                }

                return user.update(newAttrs);
            });

            this.delete('/:id', (schema, request) => {
                let id = request.params.id;
                return schema.users.find(id).destroy();
            });
        }
    });
    return server;
}

const hasDuplicatedEmail = (users, email) => {
    return users.models.some((user) => {
        return user.attrs.email === email;
    });
};

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Pagination = ({ totalUsers, currentPage, handlePagination }) => {
    const PAGE_SIZE = 3;
    const pagesGroup = useMemo(
        () => Math.ceil(totalUsers / PAGE_SIZE),
        [totalUsers]
    );

    const pagesArray = useMemo(
        () =>
            Array(pagesGroup)
                .fill(null)
                .map((_, index) => 1 + index),
        [pagesGroup]
    );

    const getPages = (pags) => {
        const halfPages = Math.round(pagesGroup / 2);

        const last = halfPages > 0 ? halfPages : pagesGroup;

        if (currentPage - 1 === 0) {
            return pags.slice(0, last + 1);
        }

        if (currentPage === pagesGroup) {
            return pags.slice(currentPage - last - 1, currentPage);
        }
        return pags.slice(currentPage - 2, currentPage + 1);
    };

    return (
        <ul className="pagination">
            {currentPage > 1 && (
                <li>
                    <a
                        href="#"
                        onClick={(e) => handlePagination(e, currentPage - 1)}
                    >
                        &lt;
                    </a>
                </li>
            )}

            {getPages(pagesArray).map((p) => (
                <li
                    key={uuidv4()}
                    className={currentPage === p ? 'active' : undefined}
                >
                    <a href="#" onClick={(e) => handlePagination(e, p)}>
                        {p}
                    </a>
                </li>
            ))}

            {currentPage < pagesGroup && (
                <li>
                    <a
                        href="#"
                        onClick={(e) => handlePagination(e, currentPage + 1)}
                    >
                        &gt;
                    </a>
                </li>
            )}
        </ul>
    );
};

export default Pagination;

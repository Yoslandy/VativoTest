import React from "react"
import PropTypes from "prop-types"

import Pagination from "../../components/Pagination"

export default function PaginationCustom({ page, lastPage }) {
    return <Pagination page={page} lastPage={lastPage} />
}

PaginationCustom.propTypes = {
    page: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
}

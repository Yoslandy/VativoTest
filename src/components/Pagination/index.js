import React from "react"
// import * as converter from "hex2dec"
import PropTypes from "prop-types"
import Button from "../Button"
import Icon from "../Icon"

export default function Pagination(props) {
    const { dataPagination, className, handleLastPage, handlePage } = props

    // const decimal = converter.hexToDec("0xFA")

    // const page = ["MQ==", "Ng=="].includes(datePagination.startCursor)
    //     ? "1"
    //     : converter.hexToDec(datePagination.startCursor)
    // const lastPage = ["MQ==", "Ng=="].includes(datePagination.endCursor)
    //     ? "1"
    //     : converter.hexToDec(datePagination.endCursor)

    return (
        <div className={`w-[255px] grid grid-cols-3 items-center ${className}`}>
            <span className="text-black font-roboto text-sm font-medium">
                {1} of {10}
            </span>
            <Button
                type=""
                className="!bg-white text-primary-60 w-[80px] h-[25px] font-roboto"
                text="Next"
                iconRigth={<Icon type="arrow" className="ml-2" />}
                onClick={handlePage}
                disabled={!dataPagination.hasNextPage}
            />
            <Button
                type=""
                className="!bg-white text-primary-60 w-[80px] h-[25px] font-roboto"
                text="Last"
                iconRigth={<Icon type="double_arrow" className="ml-2" />}
                onClick={handleLastPage}
                disabled={!dataPagination.hasPreviousPage}
            />
        </div>
    )
}

Pagination.propTypes = {
    dataPagination: PropTypes.shape({
        startCursor: PropTypes.string,
        endCursor: PropTypes.string,
        hasNextPage: PropTypes.bool,
        hasPreviousPage: PropTypes.bool,
    }),
    handlePage: PropTypes.func,
    handleLastPage: PropTypes.func,
    className: PropTypes.string,
}

Pagination.defaultProps = {
    dataPagination: {
        startCursor: "1",
        endCursor: "1",
        hasNextPage: true,
        hasPreviousPage: false,
    },
    className: "",
    handlePage: () => {},
    handleLastPage: () => {},
}

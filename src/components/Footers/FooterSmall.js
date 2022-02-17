import React from "react"
import PropTypes from "prop-types"

export default function FooterSmall(props) {
    const { absolute } = props
    return (
        <footer
            className={() => {
                if (absolute) return "absolute w-full bottom-0 bg-slate-800"
                return "relative pb-6"
            }}
        >
            <div className="container mx-auto px-4">
                <hr className="mb-6 border-b-1 border-slate-600" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4">
                        <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                            Copyright © {new Date().getFullYear()}{" "}
                            <a
                                href="https://www.creative-tim.com?ref=nr-footer-small"
                                className="text-white hover:text-slate-300 text-sm font-semibold py-1"
                            >
                                Creative Tim
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-8/12 px-4">
                        <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                            <li>
                                <a
                                    href="https://www.creative-tim.com?ref=nr-footer-small"
                                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                                >
                                    Creative Tim
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.creative-tim.com/presentation?ref=nr-footer-small"
                                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://blog.creative-tim.com?ref=nr-footer-small"
                                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer-small"
                                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                                >
                                    MIT License
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

FooterSmall.propTypes = {
    absolute: PropTypes.bool,
}

FooterSmall.defaultProps = {
    absolute: true,
}
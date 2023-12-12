import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "#e0bca0",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                &copy; Purrfect Match 2023
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Purrfect Match Repository</Heading>
                        <FooterLink href="https://github.com/Kayla-Sullens/Purrfect-Match.git">
                        <i className="fa fa-github fa-3x">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                            </FooterLink>
                    </Column>
                    
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                        <i className="fa fa-github fa-2x">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                            Kayla Sullens
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fa fa-github fa-2x">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                            Evan Griggs
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fa fa-github fa-2x">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                            Laura Tavira
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fa fa-github fa-2x">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                            Stephany Placito
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fa fa-github fa-2x">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                            Jaime Quezada
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fa fa-facebook-f fa-3x">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fa fa-instagram fa-3x">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fa fa-twitter fa-3x">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
import React from "react";
import styled from "styled-components/macro";

const Button = ({
	children,
	className,
	color = "black",
	type = "button",
	...props
}) => (
	<StyledButton type={type} color={color} className={className} {...props}>
		{children}
	</StyledButton>
);

export const ButtonUnobtrusive = (
	{ children, className, ...props },
	type = "button",
) => (
	<StyledButtonMinimal type={type} className={className} {...props}>
		{children}
	</StyledButtonMinimal>
);

export default Button;

// ********
// styles
// ********

const StyledButton = styled.button`
	padding: 0.5rem;
	border: ${(props) => `1px solid ${props.color}`};
	color: ${(props) => props.color};
	background: none;
	cursor: pointer;
	transition: color 0.25s ease-in-out, background 0.25s ease-in-out;

	&:hover {
		color: ${(props) =>
			props.color === "white"
				? "black"
				: props.color === "black"
				? "white"
				: "none"};
		background: ${(props) => props.color};
	}
`;

const StyledButtonMinimal = styled.button`
	padding: 0;
	color: #000;
	background: none;
	border: none;
	cursor: pointer;
	opacity: 1;
	transition: opacity 0.25s ease-in-out;
	outline: none;

	&:hover {
		opacity: 0.35;
	}

	&:focus {
		outline: none;
	}
`;

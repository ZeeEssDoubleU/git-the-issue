import styled from "styled-components/macro";

export const Grid = styled.div`
	display: grid;
	justify-items: space-between; /* cell items */
	gap: ${(props) => props.theme.grid.gap};
`;
export const CollapsibleGrid = styled(Grid)`
	grid-template-columns: auto;
	justify-content: center; /* grid cells */
	justify-items: center; /* cell items */
	align-items: center;
	width: 100%;
	column-gap: 2rem;

	@media (min-width: 720px) {
		grid-template-columns: auto auto;
		justify-content: space-between;
		justify-items: center; /* cell items */
	}
`;

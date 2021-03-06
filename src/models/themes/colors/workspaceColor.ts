export interface IWorkspaceColor {

	scope: string;

	color: string;

	/**
	 * Determines whether this color element will be hidden when theme is materialized.
	 */
	materialize?: boolean;

}
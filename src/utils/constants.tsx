import { MenuGroup } from "./types"

export const menuItems = (guildId: string): MenuGroup[] => [
	{
		name: "General",
		path: "/general",
		routes: [
			{
				name: "General",
				path: `/dashboard/${guildId}/general/`
			},
		]
	},
	{
		name: "Security",
		path: "/security",
		routes: [
			{
				name: "Authentication",
				path: `/dashboard/${guildId}/security/authentication`
			},
			{
				name: "Roles",
				path: `/dashboard/${guildId}/security/roles`
			},
		],
	},
	{
		name: "Miscellaneous",
		path: "/miscellaneous",
		routes: [
			{
				name: "Commands",
				path: `/dashboard/${guildId}/miscellaneous/commands`
			},
			{
				name: "Levels",
				path: `/dashboard/${guildId}/miscellaneous/levels`
			}
		]
	},
]
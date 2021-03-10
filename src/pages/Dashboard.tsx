import React from 'react'
import { GuildContext } from '../utils/contexts/GuildContext';
import { GuildStoreContext } from '../utils/contexts/GuildStoreContext';
import { BasePageStyle, DashboardHeader } from '../utils/styles'

export const DashboardPage = (props: any) => {
	const { guildId } = props.match.params
	const { guilds } = React.useContext(GuildStoreContext)
	const { guild, setGuild } = React.useContext(GuildContext)

	React.useEffect(() => {
		const findGuild = guilds.find((g) => g.id === guildId)
		setGuild(findGuild)
	})

	if (!guild) {
		
		console.log(`Aw Shnap, There's no guild!`)

		return (
			<BasePageStyle>
				<DashboardHeader>
				Please select a server on the left!
				</DashboardHeader>
			</BasePageStyle>
		)
	} else {
	
		console.log(`Found a Guild!`)

		return(
			<BasePageStyle>
				<DashboardHeader>Dashboard</DashboardHeader>
			</BasePageStyle>
		);
	}
}
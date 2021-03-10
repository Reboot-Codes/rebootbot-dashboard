import * as React from 'react'
import { GuildIcon, IconStyle, SidebarContent, SidebarHeader, SidebarStyle } from "../utils/styles"
import { Guild } from "../utils/types"
import { History } from 'history'
import { GuildContext } from '../utils/contexts/GuildContext'

type SidebarProps = {
	//eslint-disable-next-line
	guilds: Guild[];
	history: History;
}

export const Sidebar = (props : SidebarProps) => {
	//eslint-disable-next-line
	const { guild, setGuild } = React.useContext(GuildContext);
	return <SidebarStyle>
	 <SidebarHeader>
		 <IconStyle />
	 </SidebarHeader>
	 <SidebarContent>
		{props.guilds.map((guild) => (
			<GuildIcon key={guild.id} onClick={() => {
				setGuild(guild)
				props.history.push(`/dashboard/${guild.id}/`)
			}} />
		))}
	 </SidebarContent>
 </SidebarStyle>
}
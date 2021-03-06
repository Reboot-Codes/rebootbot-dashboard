import styled from 'styled-components'

export const SidebarStyle = styled.div`
	width: 100px;
	height: 100%;
	position: fixed;
	overflow: scroll;
	background-color: ${({ theme }) => theme.base.sidebar};
	color: ${({ theme }) => theme.text.main};
	::-webkit-scrollbar {
		display: none;
	}
`;

export const MenuStyle = styled.div`
	width: 300px;
	background: ${({ theme }) => theme.base.menu};
	color: ${({ theme }) => theme.text.main};
	height: 100%;
	box-sizing: border-box;
	position: fixed;
	margin-left: 100px;
	overflow: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const BasePageStyle = styled.div`
	height: 100%;
	background-color: ${({ theme }) => theme.base.content};
	color: ${({ theme }) => theme.text.main};
	box-sizing: border-box;
	position: absolute;
	margin-left: 400px;
	width: calc(100% - 400px);
`;

export const BaseHeader = styled.header`
	box-sizing: border-box;
	height ${({ theme }) => theme.height.topContent};
	box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
`;

export const SidebarHeader = styled(BaseHeader)`
	justify-content: center;
	background-color: ${({ theme }) => theme.base.sidebar};
	position: fixed;
	width: 100px;
`;

export const MenuHeader = styled(BaseHeader)`
	padding: 25px;
	position: fixed;
	z-index: 10;
	background-color: ${({ theme }) => theme.base.menu};
	width: 100%;
`;

export const DashboardHeader = styled(BaseHeader)`
	padding 25px;
`;

export const IconStyle = styled.div`
	height: 55px;
	width: 55px;
	background-color: grey;
	border-radius: 50px;
`;

export const GuildIcon = styled.div`
	background-color: grey;
	border-radius: 50px;
	height: 60px;
	width: 60px;
	margin: 5px 0px;
`;

export const SidebarContent = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${({ theme }) => theme.padding.content}
`;

export const MenuContent = styled.div`
	box-sizing: border-box;
	padding:${({ theme }) => theme.padding.content};
	margin-top: 100px;
`;

export const MenuCategory = styled.div`
	box-sizing: border-box;
	font-size: 22px;
	font-weight: bold;
	:nth-child(2) {
		margin: 20px 0px
	}
	span {
		padding: 0px 20px;
	}
`;

export const MenuCategoryItem = styled.div`
	font-size: 20px;
	font-weight: lighter;
	padding 5px 0px;
	transition: 100ms background-color;
	:hover {
		cursor: pointer;
		background-color: #42494c;
	}
`;

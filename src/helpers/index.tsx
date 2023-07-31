import React from 'react';
import { HomeOutlined, UserOutlined, GlobalOutlined, RocketOutlined, TeamOutlined} from '@ant-design/icons';

export const sideBarIformation = [
	{
			key: '/',
			icon: React.createElement(HomeOutlined),
			label: 'Главная страница'
	},
	{
			key: '/peoples',
			icon: React.createElement(UserOutlined),
			label: 'Персонажи'
	},
	{
			key: '/species',
			icon: React.createElement(TeamOutlined),
			label: 'Рассы'
	},
	{
			key: '/planet',
			icon: React.createElement(GlobalOutlined),
			label: 'Планеты'
	},
	{
			key: '/starships',
			icon: React.createElement(RocketOutlined),
			label: 'Звездолеты'
	}
]
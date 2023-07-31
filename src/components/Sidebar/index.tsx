import React from 'react'
import { Layout, Menu} from 'antd'
import { MenuSlider } from '../../types/index'
import {ISideBarInformation} from '../../types/index'
import { useHistory } from 'react-router-dom'

interface IPropsSideBar {	
	information: ISideBarInformation[]
}

export default function Sidebar({information}: IPropsSideBar){

	const history = useHistory()

    function onClick(items: MenuSlider) {
			history.push(`${items.key}`)
    }

    return (
        <Layout.Sider
				breakpoint="xxl"
				collapsedWidth="0"
				>
				<Menu
            theme="dark"
            mode="inline"
            onClick={onClick}							
            items={information} 						
        />
		</Layout.Sider>
    )
}
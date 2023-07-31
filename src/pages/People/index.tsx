import React, {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { People as TPeople } from "../../types";
import { getPeople } from "../../api";
import { message, Button} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './style.css'
import useFetch from "../../hoocks/useFetch";


export default function People() {

	const history = useHistory()

	const {id}: {id:string} = useParams()

	const {data: info, loading} = useFetch(getPeople, id)	

	const antIcon = <LoadingOutlined spin />;

 	return (
			<Spin 
				className="spin-loading"
				spinning={loading} 
				indicator={antIcon} 
				size="large"				
			>
			{info && 
				<div className="wrapper">					
					<Button  type="primary" onClick={history.goBack}>Назад</Button>
					<p>Name - {info?.name}</p>
					<p>Height - {info?.height} cm</p>
					<p>Weight - {info?.mass} kg</p>
					<p>Eye color - {info?.eye_color}</p>
					<p>Year of birth - {info?.birth_year}</p>	
				</div>				
			}	
			</Spin>						
	)
}
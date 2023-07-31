import React, {useEffect, useState, ChangeEvent, SetStateAction, useMemo} from 'react';
import { useQuery } from 'react-query'
import { message, List, Divider, Input, Select} from 'antd'
import { People } from '../../types';
import { getPeoples } from '../../api'
import { PeopleItem } from '../../components'
import './style.css'
import useFetch from '../../hoocks/useFetch';

function Peoples() {

	const getData = async () => {
		const data : {results: People[]} = await getPeoples() || {}
		const result = data.results.map((el, index) => {
			return {...el, id : index}
		})
		return result
	}

	const {data: info, loading} = useFetch(getData)

	const [valueInput, setValueInput] = useState('')
	const [selectValue, setSelectValue] = useState('')

	function chuseCharacter (e:ChangeEvent<HTMLInputElement>) {
		setValueInput(e.target.value)
	}

	function onSelect (value: string) {
		setSelectValue(value)
	}

	const renderList = useMemo(() => {
		return info?.filter((person: People) => {
			const result = person.name.toLowerCase().includes(valueInput.toLowerCase())

			return selectValue ? selectValue === person.gender && result : result
			
		}) || []
	}, [info,valueInput,selectValue])

	console.log(selectValue)

 	return (
		<div className='conteiner_scroll' >
			<Input className='input' disabled={loading} placeholder="Choose a character" onChange={chuseCharacter}/>
			<Select
				className='input'
				disabled={loading}
				allowClear
				onClear={()=>{setSelectValue('')}}
				onSelect={onSelect}
				placeholder='Выберите параметр сортировки по гендеру'
				options={[
					{
						value: "n/a",
						label: 'Неопознанный'
					},
					{
						value: "male",
						label: 'Мужской'
					},
					{
						value: "female",
						label: 'Женский'
					},
				]}
			/>
			<List 
				className='list_container scroll-container'
				loading={loading}
				dataSource={renderList}		
				renderItem={(item: People) => (					
					<List.Item key={item.id}>
						<PeopleItem people={item} index={item.id}/>
					</List.Item>
					)						
				}
			/>
		</div>		
	);
}

export default Peoples;
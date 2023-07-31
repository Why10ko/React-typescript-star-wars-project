import './styles.css'
import { People } from '../../types'
import { FC } from 'react'
import { useHistory } from 'react-router-dom'

interface Props {
	people: People
	index: number
}

const PeopleItem: FC<Props> = ({people, index}) => {

	const history = useHistory()
	
	function onClick() {
		history.push(`/peoples/${index + 1}`)
	}

	return (
		<>		
			<div
				className='list_item' 
				onClick={onClick}
			>
				<p>{people.name}</p>			
			</div>
		</>
	)
}

export default PeopleItem
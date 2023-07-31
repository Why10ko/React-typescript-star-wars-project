import { People, Species } from '../types'
const url = 'https://swapi.dev/api/'

export function getPeoples(): Promise<{results: People[]}> {		
	return	fetch(`${url}people`)
						.then(res => res.json())
}

export function getPeople(id: number | string): Promise<People> {
	return fetch(`${url}people/${id}/`)
					.then(res => res.json())
}

export function getSpecies(): Promise<{results: Species[]}> {		
	return fetch(`${url}species`)
						.then(res => res.json())
}


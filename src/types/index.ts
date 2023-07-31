import { ReactElement } from "react"

export interface CommonEnteties{
	created: string
	edited: string
	films: string[]
	name: string
	url: string
} 

export interface People extends CommonEnteties {
	id: number	
	birth_year: string
	eye_color: string
	gender: string
	hair_color: string
	height: string	
	homeworld: string
	mass: string
	skin_color: string
	species: string[]
	starships: string[]
	vehicles: string[]
}

export interface Species extends CommonEnteties {
	classification: string
	designation: string
	average_height: string
	skin_colors: string
	hair_colors: string
	eye_colors: string
	average_lifespan: string
	homeworld: string
	language: string
	people: string[]
}

export interface MenuSlider {
	key: string
}

export interface ISideBarInformation{
	key: string
  icon: ReactElement
  label: string
}
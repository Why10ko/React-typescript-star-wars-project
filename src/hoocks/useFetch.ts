import { message } from "antd"
import { useState, useEffect } from "react"

export default function useFetch (fetch: (args?: any) => Promise<any>, options?: string) {

	const [data, setData] = useState<any>(null)
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		setLoading(true)

		const response = options ? fetch(options) : fetch()

		response
			.then(res => {
			setData(res)
			message.success('May the Force be with you')				
		})
			.catch(error => {
				message.open({
					type: 'error',
					content: 'This is an error message',
				});
			})
			.finally(() => {setLoading(false)})
	}, [options])

	return {data,loading}

}
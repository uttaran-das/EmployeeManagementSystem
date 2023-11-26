import axios from "axios"
import { useCallback, useEffect, useState } from "react"

function Home() {

    interface EmployeeObject {
        id: string
        username: string
        firstname: string
        lastname: string
        email: string
    }

    const [employees, setEmployees] = useState<EmployeeObject[]>([])
    const [keys, setKeys] = useState<string[]>([])

    const loadUsers = useCallback(
        async () => {
            try {
                const res = await axios.get("http://localhost:8080/employees")
                console.log(res.data)
                setEmployees(res.data)
                console.log(Object.keys(res.data[0]))
                setKeys(Object.keys(res.data[0]))
            } catch (error) {
                console.log(error)
            }
        }, [],
    )

    useEffect(() => {
        loadUsers()
    }, [loadUsers])

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-100 dark:text-gray-200 my-5">
                <thead className="text-xs text-gray-300 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-300">
                    <tr>
                        {
                            keys.map((key) => (
                                <th scope="col" className="px-6 py-3">
                                    {key}
                                </th>
                            ))
                        }
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => (
                            <tr key={employee.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {employee.id}
                                </th>
                                <td className="px-6 py-4">
                                    {employee.username}
                                </td>
                                <td className="px-6 py-4">
                                    {employee.firstname}
                                </td>
                                <td className="px-6 py-4">
                                    {employee.lastname}
                                </td>
                                <td className="px-6 py-4">
                                    {employee.email}
                                </td>
                                <td className="px-6 py-4">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-1">View</button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1">Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Home
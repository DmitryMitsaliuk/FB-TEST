import { rest } from 'msw';
import axios from 'axios';

export const handlers = [
    rest.get('http://localhost:3000/employees', async (req, res, ctx) => {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=10")
            const fetchedEmployees = response.data.results;
            fetchedEmployees.forEach((employee) => (employee.status = "ADDED"));
            return res(
                ctx.status(200),
                ctx.json({ data: fetchedEmployees })
            );
        } catch {
            return res(
                ctx.status(404)
            );
        }
        
    }),
]

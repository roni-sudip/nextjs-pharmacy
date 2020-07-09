import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllVehicales(req, res){
    res.json([
        {id:'1', brand:'Toyota', model:'Axio'},
        {id:'2', brand:'Toyota', model:'Lexus'},
        {id:'3', brand:'Toyota', model:'Crown'}
    ]);
}
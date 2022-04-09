import React, {useState} from "react";
import { Checkbox, Button, Form } from 'semantic-ui-react'
import axios from 'axios'

const Create = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company_name, setCompany_name] = useState('')
    const [position, setPosition] = useState('')
    const [experience, setExperience] = useState('')

    const postData = () => {
        axios.post('http://localhost:5000/placement/', {
            name,
            email,
            company_name,
            position,
            experience
        })
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label>Name</label>
                <input placeholder='Full Name' onChange={(e) => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Company Name</label>
                <input placeholder='Company Name' onChange={(e) => setCompany_name(e.target.value)} />
            </Form.Field>
            
            <Form.Field>
                <label>Position</label>
                <input placeholder='Position' onChange={(e) => setPosition(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Experience</label>
                <input placeholder='Experience' onChange={(e) => setExperience(e.target.value)} />
            </Form.Field> 
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
    )
}

export default Create
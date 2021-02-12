import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, ListGroup } from 'react-bootstrap'
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import FuzzySearch from 'fuzzy-search'

export default function CardCom() {
    const formData = useSelector(state => state.form_data)
    const [myData, setmyData] = useState(formData)
    // console.log(formData)

    const onChange = (value) => {
        const searcher = new FuzzySearch(myData, ['nameOfTheDish'], {
            caseSensitive: false

        });
        const result = searcher.search(value);
        setmyData(result)
        console.log(result)

    }

    return (
        
        <div>
           
            <InputGroup className="md-0" onChange={e => onChange(e.target.value)}>
                <InputGroup.Prepend >
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Prepend>
                <FormControl  placeholder="Search by Name of Disk" aria-describedby="basic-addon1" />
            </InputGroup>
            <div style={{ display: 'flex' }}>


                {myData.map((item, key) =>
                    <div style={{ width: '200px', padding: '1rem' }}>
                       
                        <Card  key={key}>
                        
                            <ListGroup variant="flush" style={{ marginLeft: 20 }}>
                                <ListGroup.Item>{item.nameOfTheDish}</ListGroup.Item>
                                <ListGroup.Item>{item.ingredientName}</ListGroup.Item>
                                <ListGroup.Item>{item.ingredientQuantity}</ListGroup.Item>
                                <ListGroup.Item>{item.unitIngredientQTY}</ListGroup.Item>
                                <ListGroup.Item>{item.stepsToCook}</ListGroup.Item>
                                <img src={item.pictureURL} alt='picture' />
                                
                            </ListGroup>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}

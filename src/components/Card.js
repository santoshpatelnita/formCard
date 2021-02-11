import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Card, ListGroup } from 'react-bootstrap'
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import FuzzySearch from 'fuzzy-search'

export default function CardCom() {
    const formData = useSelector(state => state.form_data)
    const [myData, setmyData] = useState(formData)
    // console.log(formData)

const onChange = (value) =>{
    const searcher = new FuzzySearch(myData, ['ingredientName'], {
        caseSensitive: false
    });
    const result = searcher.search(value);
   setmyData(result)

}

    return (
        <div>
            <InputGroup className="mb-3" onChange={e => onChange(e.target.value)}>
                <InputGroup.Prepend >
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
            <div style={{ display: 'flex' }}>


                {myData.map((item, key) =>
                    <div>
                        <image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03bkOmIsxD1hEsHS-Wb-ImFmOkSQplvG_Vg&usqp=CAU'} alt='picture' />
                        <Card style={{ width: '18rem' }} key={key}>

                            <ListGroup variant="flush" style={{ marginLeft: 20 }}>
                                <ListGroup.Item>{item.ingredientName}</ListGroup.Item>
                                <ListGroup.Item>{item.ingredientQuantity}</ListGroup.Item>
                                <ListGroup.Item>{item.nameOfTheDish}</ListGroup.Item>
                                <ListGroup.Item>{item.stepsToCook}</ListGroup.Item>
                                <ListGroup.Item>{item.unitIngredientQTY}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}

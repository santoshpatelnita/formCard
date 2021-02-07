import React from 'react'
import { useSelector } from 'react-redux'
import  { Card, ListGroup} from 'react-bootstrap'


export default function CardCom() {
    const formData = useSelector(state => state.form_data)
    console.log(formData)
    return (
        <div style={{display:'flex'}}>
              
            {formData.map((item, key) =>
            <div>
                <image src = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03bkOmIsxD1hEsHS-Wb-ImFmOkSQplvG_Vg&usqp=CAU'} alt='picture'/>
                <Card style={{ width: '18rem' }} key={key}>
                    
                    <ListGroup variant="flush" style={{marginLeft:20}}>
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
    )
}

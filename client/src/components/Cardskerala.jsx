import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import k  from  './images/kochi.jpeg'
import kozh from './images/kozhikode.jpeg';
import munn from './images/munnar.jpeg';
import thr from './images/thrissur.jpg';
import way  from  './images/wayanad.jpeg'
import svp from './images/svp.jpeg';
import  alpp from './images/alp.jpeg';
import tvm from './images/tvm.jpeg';
import { Container, Row,Col } from 'react-bootstrap';
import { useContext, useState } from 'react';
import CommentContext from './commentProvider';
import { useNavigate } from 'react-router-dom';
function Cardskerala(){
    const [title,setTitle]=useState("")
    const nav = useNavigate()
    const {comment} = useContext(CommentContext)

    const record=[
        {idno:1,title:'kochi',description:'Kochi (also known as Cochin) is a city in southwest India coastal Kerala state. It has been a port since 1341, when a flood carved out its harbor and opened it to Arab, Chinese and European merchants. Sites reflecting those influences include Fort Kochi, a settlement with tiled colonial bungalows and diverse houses of worship. Cantilevered Chinese fishing nets, typical of Kochi, have been in use for centuries.',imageUrl:k},
        {idno:2,title:'alapuzha',description:'Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It is best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The citys Mullakkal Temple features a traditional design. Punnamada Lake snake boat races are a well-known annual event. ',imageUrl:alpp},
        {idno:3,title:'kozhikode',description:'Kozhikode is a coastal city in the south Indian state of Kerala. It was a significant spice trade center and is close to Kappad Beach, where Portuguese explorer Vasco da Gama landed in 1498. The central Kozhikode Beach, overlooked by an old lighthouse, is a popular spot for watching the sunset. Inland, tree-lined Mananchira Square, with its musical fountain, surrounds the massive Mananchira Tank, an artificial pond',imageUrl:kozh},
        {idno:4,title:'thrissur',description:'Thrissur is a city in the south Indian state of Kerala. It is known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals. The ornate, Indo-Gothic Our Lady of Dolours Basilica is nearby. To the north, Thiruvambady Temple is home to several elephants. Sakthan Thampuran Palace houses an archaeology museum with bronze statues and ancient coins.',imageUrl:thr},
        {idno:5,title:'munnar',description:'Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it is surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak.',imageUrl:munn},
        {idno:6,title:'wayanad',description:'Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets. In the Ambukuthi Hills to the south, Edakkal Caves contain ancient petroglyphs, some dating back to the Neolithic age.',imageUrl:way},
        {idno:7,title:'silent valley',description:'Silent Valley National Park is a national park in Kerala, India. It is located in the Nilgiri hills and has a core area of 89.52 km². It is surrounded by a buffer zone of 148 km². This national park has some rare species of flora and fauna. Silent Valley National Park was explored in 1847 by the botanist Robert Wight.',imageUrl:svp},
        {idno:8,title:'trivandrum',description:'Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It is distinguished by its British colonial architecture and many art galleries. It is also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries.',imageUrl:tvm},
    ]
    return(
        <>
       <Container className="margint">
        {/* <Row className='mb-3'> 
            <Col>
             <input type="text" name="sch" onChange={(e)=>{
                   setTitle(e.target.value)
             }} className='form-control' placeholder='enter the place name '/>
             
            </Col>
        </Row> */}
        <Row className='mb-3'>
            <Col>
            <Button variant='success' onClick={()=>{
                setTitle("")
            }}>
                All
            </Button>
            </Col>
            {
                record.length>0&& 
                record.map((item)=>{
                    return(
                        <Col key={item.idno}>
                        <Button variant='info' onClick={(e)=>{
                            setTitle(item.title)
                        }}>
                            {item.title}
                        </Button> 
                      
                        </Col>
                    )
                })
            }
        </Row>
        <Row>
            {    
                 record.length>0?  
                
                 record.filter((rec)=>{
                    return(rec.title.toLocaleLowerCase().match(comment.toLocaleLowerCase()))
                 })

             
                 .map((list)=>{
                   return(
                    <Col lg={3} className='mb-2' key={list.idno}>
                    <Card>
                        <Card.Img variant="top" src={list.imageUrl}  style={{height:'120px'}}/>
                        <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                                <Card.Text>
                                 {list.description}
                                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    
                </Col>
                   )
                 })
                 
                 
                 :"No Data Found"

            }

      

       
        </Row>
       </Container>
     
        </>
    )
}

export default Cardskerala;
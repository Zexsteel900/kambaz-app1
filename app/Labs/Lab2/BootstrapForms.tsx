import Form from 'react-bootstrap/Form';
import { FormControl, FormLabel, FormCheck } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { Row, Col, Button } from 'react-bootstrap';
export default function BootstrapForms(){
    return (
        <>
            <div id="wd-css-styling-forms">
                <h2>Forms</h2>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </div>

            <div id="wd-css-styling-dropdowns">
                <h3>Dropdowns</h3>
                <Form.Select>
                    <option value="0" defaultChecked>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>

            <div id="wd-css-styling-range-and-sliders">
            <h3>Range</h3>
            <Form.Label>Example range</Form.Label>
            <Form.Range min="0" max="5" step="0.5" />
            </div>

            <div id="wd-css-styling-addons">
            <h3>Addons</h3>
                <InputGroup className="mb-3">
                    <InputGroupText>$</InputGroupText>
                    <InputGroupText>0.00</InputGroupText>
                    <FormControl />
                </InputGroup>
                <InputGroup>
                    <FormControl />
                    <InputGroupText>$</InputGroupText>
                    <InputGroupText>0.00</InputGroupText>
                </InputGroup>
            </div>

            <div id="wd-css-responsive-forms-1">
            <h3>Responsive forms</h3>
                <Row className="mb-3" controlId="email1">
                    <FormLabel column sm={2}> Email </FormLabel>
                    <Col sm={10}>
                        <FormControl type="email" defaultValue="email@example.com" />
                    </Col>
                </Row>
                <Row className="mb-3" controlId="password1">
                    <FormLabel column sm={2}> Password </FormLabel>
                    <Col sm={10}>
                        <FormControl type="password" />
                    </Col>
                </Row>
                <Row className="mb-3" controlId="textarea2">
                    <FormLabel column sm={2}> Bio </FormLabel>
                    <Col sm={10}>
                        <FormControl as="textarea" style={{ height: "100px" }} />
                    </Col>
                </Row>
            </div>

            <div id="wd-css-responsive-forms-2">
            <h3>Responsive forms 2</h3>
                <Form>
                    <Row className="mb-3" controlId="formHorizontalEmail">
                        <FormLabel column sm={2}> Email </FormLabel>
                        <Col sm={10}> <FormControl type="email" placeholder="Email" /> </Col>
                    </Row>
                    <Row className="mb-3" controlId="formHorizontalPassword">
                        <FormLabel column sm={2}> Password </FormLabel>
                        <Col sm={10}> <FormControl type="password" placeholder="Password" /> </Col>
                    </Row>
                    <fieldset>
                        <Row className="mb-3">
                            <FormLabel as="legend" column sm={2}> Radios </FormLabel>
                            <Col sm={10}>
                            <FormCheck type="radio" label="First radio" name="formHorizontalRadios" defaultChecked />
                            <FormCheck type="radio" label="Second radio" name="formHorizontalRadios" />
                            <FormCheck type="radio" label="Third radio" name="formHorizontalRadios" />
                            <FormCheck type="radio" label="Remember me" name="formHorizontalRadios" />
                            </Col>
                        </Row>
                    </fieldset>
                    <Col> <Button type="submit">Sign in</Button> </Col>
                </Form>
            </div>

        </>
    );
}
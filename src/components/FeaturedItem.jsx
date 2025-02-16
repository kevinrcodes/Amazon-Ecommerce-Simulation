import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export default function FeaturedItem(props) {

    const [showNutrition, setShowNutrition] = useState(false);

    const toggleNutrition = () => setShowNutrition(!showNutrition);

    return <Card>
        <img src={props.img} alt={props.name} style={{ width: "50%", display: "block", margin: "auto" }}></img>
        <h3>{props.name}</h3>
        <h4>${props.price} per unit</h4>
        <p>{props.description}</p>

        <Button onClick={toggleNutrition}>{showNutrition ? "Hide Nutrition Facts" : "Show Nutrition Facts"}</Button>

        {showNutrition && (
            <Table border="1">
                <thead>
                    <tr>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Carbohydrates</th>
                        <th>Protein</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.nutrition?.calories || "0"}</td>
                        <td>{props.nutrition?.fat || "0g"}</td>
                        <td>{props.nutrition?.carbohydrates || "0g"}</td>
                        <td>{props.nutrition?.protein || "0g"}</td>
                    </tr>
                </tbody>
            </Table>
        )}

    </Card>
}
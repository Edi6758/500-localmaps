import {
    Button,
    ButtonContainer,
    CategoryBox,
    CategoryContainer,
    CategoryImage,
    Container,
    Form,
    FormTitle,
    MapContainer,
    Section,
} from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
//import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { TileLayer, Marker } from "react-leaflet";
import { categories } from "./categories";
//import useGetLocation from "../../hooks/useGetLocation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function New () {
    const history = useNavigate();
    const [formValues, setFormValues] = useState({
      name: "",
      description: "",
      contact: "",
      category: "",
      coords: [0, 0],
    });
    //const { coords } = useGetLocation();
    return (
        <Container>
            <Form>
                <FormTitle>
                    Cadastro do comércio local
                </FormTitle>
                <Section>
                    Dados
                </Section>
                <Input
                    label="Nome do local"
                    name="name"
                    value={formValues.name}
                    onChange={setFormValues}
                />

                <Input
                    label="Descrição"
                    name="description"
                    value={formValues.description}
                    onChange={setFormValues}
                />

                <Input
                    label="Contato"
                    name="contact"
                    value={formValues.contact}
                    onChange={setFormValues}
                />

            </Form>
        </Container>
    )
}
import React, {useState} from "react";
import { View, Text, TextInput, Button, Image, ScrollView } from "react-native";
import axios from "axios";
import Style from "./Style";

export default function App() {

  const [cep, setCep] = useState("");
  const [data, setData] = useState(null);

  const consumirAPI = async () => {

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    setData(response.data)
  }

  return (

    <ScrollView>
      <View style={Style.container}>
        <View style={Style.logoArea}>
          <Image style={Style.logo} source={{uri:'https://viacep.com.br/estatico/images/viacep.png.pagespeed.ce.I80LiA6qpr.png'}} />
        </View>
        <TextInput style={Style.inputCep} value={cep} onChangeText={setCep} placeholder="Digite o CEP"/>
        <Button style={Style.btn} title="Enviar" onPress={consumirAPI} color={'yellow'}/>

        {data && (
          <View style={Style.viewArea}>
            <Text>CEP: {data.cep}</Text>
            <Text>Lougradouro: {data.lougradouro}</Text>
            <Text>Complemento: {data.complemento}</Text>
            <Text>Bairro: {data.bairro}</Text>
            <Text>Localidade: {data.localidade}</Text>
            <Text>UF: {data.uf}</Text>
            <Text>IBGE: {data.ibge}</Text>
            <Text>GIA: {data.gia}</Text>
            <Text>DDD: {data.ddd}</Text>
            <Text>SIAFI²: {data.siafi}</Text>
            <Text>1- Guia de Informações e Apurações do ICMS, ou apenas GIA, é um documento fiscal obrigatório que deve ser..</Text>
            <Text>2- Sistema integrado de Administração Financeira do Governo Federal - SIAFI é um sistema contabil que tem por finalidade realizar ...</Text>
          </View>

        )}
      </View>
    </ScrollView>

  );

}
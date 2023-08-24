import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './style';


export function Home() {
    // const participants = ['Eduardo', 'Julia', 'Alessandra', 'Gustavo', 'Guto', 'Morpheus', 'Jane', 'Amora', 'Cleusa', 'Carol', 'Godoy']
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {

        if (participants.includes(participantName)) {
            return Alert.alert(' ( ˘︹˘ ) Atenção', 'Ja Existe um Participante na Lista com este nome.')
        }

        // os "..." Servem para desestruturar os Arrays
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {

        //return console.log(participants.filter(participant => participant !== name));        

        Alert.alert(' (ㆆ_ㆆ) Atenção', `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevstState => prevstState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }

        ])


    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Participante"
                    placeholderTextColor="#6B6B6B"

                    // Jeito Tradicional de Fazer
                    // onChangeText={text => setParticipantName(text)}
                    onChangeText={setParticipantName} //Assim é a forma reduzida de fazer.
                    value={participantName}
                />


                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText} >
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* 
                A FlatList só renderiza apenas os componentes que estão na tela
                é mais performatica e recomendada para listas grandes.
            */}

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText} >
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de Presença
                    </Text>
                )}

            />


            {/* 
                Exemplo com ScrollView
                A ScrollView Renderiza todos os componentes de uma vez. 
                desvantagem no desempenho quando a lista é muito grande.                
            */}

            {/* 
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={() => handleParticipantRemove("Eduardo")}
                        />
                    ))
                }
            </ScrollView> */}


        </View>
    )
}
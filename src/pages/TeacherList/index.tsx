import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import {
  BorderlessButton,
  RectButton,
  ScrollView,
  TextInput,
} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import api from '../../services/api';

function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeacherIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeacherIds);
      }
    });
  }

  function handleToggleFiltersIsVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: { subject, week_day, time },
    });
    if (response.data.length > 0) {
      setTeachers(response.data);
      setIsFilterVisible(false);
    } else {
      Alert.alert(
        'Aviso',
        'Nenhum Proffy encontrado. Confira sua pesquisa e tente novamente.',
        [
          {
            text: 'Limpar Campos',
            onPress: () => {
              setSubject('');
              setWeekDay('');
              setTime('');
            },
          },
          { text: 'OK', style: 'default' },
        ]
      );
      setTeachers([]);
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersIsVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={(text) => {
                setSubject(text);
              }}
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={(text) => {
                    setWeekDay(text);
                  }}
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={(text) => {
                    setTime(text);
                  }}
                  style={styles.input}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              teacher={teacher}
              key={teacher.id}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;

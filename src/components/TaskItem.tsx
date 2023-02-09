import { Surface, Text } from '@react-native-material/core';
import React from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import { cardColor, textColor } from '../constants/colors';
import TaskInterface from '../interfaces/TaskInterface';

function TaskItem(data: ListRenderItemInfo<TaskInterface>) {
  return (
    <Surface
      elevation={1}
      style={{
        backgroundColor: cardColor,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
      }}>
      <Text color={textColor}>{data.item.title}</Text>
      {data.item.description && (
        <Text color={textColor} variant="caption">
          {data.item.description}
        </Text>
      )}
      <Text color={textColor} variant="caption">
        {new Date(data.item.date).toLocaleString('pt')}
      </Text>
    </Surface>
  );
}

export default TaskItem;

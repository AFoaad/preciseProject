import React,{memo} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { ItemProps } from './index.interface';


const Item:React.FC<ItemProps> = ({created , end , start , summary}):JSX.Element => {

    return (
        <View style={styles.itemHolder}>
            <Text children={`name : ${summary}`} />
            <Text children={`start : ${start.date}`} />
            <Text children={`end : ${end.date}`} />
            <Text children={`created : ${created}`}/>
        </View>
    );
};

export default memo(Item);




import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View, SafeAreaView, FlatList, ScrollView } from 'react-native'
import Item from '../item'

import styles from './styles'


const CamList = ({ navigation, list }) => {
    return (
        <ScrollView >
            <View style={{
            flexWrap: "wrap",
            flexDirection: 'row',
            width: "100%",
            padding: 20
        }}>
            {
                list.map((item)=>{
                    return (
                        (<View style={{
                            width: "50%",
                            padding: 5,
                        }}>
                            <Item data={item} />
                        </View>)
                    )
                })
            }
            
            </View>
            
        </ScrollView>
    )
}

CamList.propTypes = {
    navigation: PropTypes.object.isRequired,
    list: PropTypes.array
}
CamList.defaultProps = {
    list: []
}

export default CamList

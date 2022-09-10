import React, { useState } from "react";

import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import useMarketList from "./src/hooks/useMarketList";
import { styles } from "./src/styles";
import { Feather } from "@expo/vector-icons";

const App = () => {
  const [state, addItem, checkItem, removeItem] = useMarketList();
  const [product, setProduct] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar produto"
          value={product}
          onChangeText={(text) => setProduct(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            addItem(product);
            setProduct("");
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={state}
        renderItem={({ item }) => (
          <View style={styles.itemsContainer}>
            <TouchableOpacity
              style={styles.itemCheckButton}
              onPress={() => {
                checkItem(item.id);
              }}
            >
              <Text
                style={[
                  styles.listItem,
                  item.check ? styles.listItemChecked : "",
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removerItem}
              onPress={() => {
                removeItem(item.id);
              }}
            >
              <Text style={styles.removerItemText}>
                <Feather name="trash-2" size={30} />
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;

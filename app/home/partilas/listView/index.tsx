import React, { memo, useCallback, useMemo } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import ItemsProps, { ItemProps } from './index.interface';
import Item from './item';

const ListView: React.FC<ItemsProps> = ({items, loading}): JSX.Element => {
  const renderItem = useCallback(
    ({item}: {item: ItemProps}) => (
      <Item
        created={item.created}
        end={item.end}
        start={item.start}
        summary={item.summary}
        key={item.id}
      />
    ),
    [],
  );
  const handleListView = useMemo(() => {
    if (!loading && items) {
      return <FlatList data={items} renderItem={renderItem} />;
    }

    return <ActivityIndicator animating={loading} size="large" />;
  }, [loading, items]);

  return <>{handleListView}</>;
};

export default memo(ListView);

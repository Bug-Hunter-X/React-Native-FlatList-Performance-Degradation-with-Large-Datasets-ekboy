This bug occurs when using the `FlatList` component in React Native with a large dataset.  The issue is that even with optimizations like `keyExtractor`, `renderItem`, and `removeClippedSubviews`, the scrolling performance is still sluggish and causes the app to freeze or lag.  This is especially noticeable on lower-end devices.

```javascript
<FlatList
  data={largeDataset}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <ListItem item={item} />}
  removeClippedSubviews={true}
/>
```
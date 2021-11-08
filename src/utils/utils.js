import _sortBy from 'lodash.sortby';
import _get from 'lodash.get';
import _isEmpty from 'lodash.isempty';

const getSortedList = (list, property = '') => {
  if (_isEmpty(list)) return null;

  const sortedList = !!property ?
    _sortBy(list, [function (o) { return _get(o, property) }])
    :
    list;
  return sortedList;
}

export { getSortedList };
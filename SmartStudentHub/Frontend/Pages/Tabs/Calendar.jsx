import React, { useContext, useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { Calendar as RNCalendar, LocaleConfig } from 'react-native-calendars';
import EventsCard from '../../Components/EventsCard';
import { RegisteredEventsContext } from '../../newcontext/RegisteredEventsContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr',
    'May',
    'Jun.',
    'Jul.',
    'Aug',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
};
LocaleConfig.defaultLocale = 'en';
const CalendarTab = ({ navigation }) => {
  const theme = useTheme();
  const { registeredEvents, isLoading } = useContext(RegisteredEventsContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  useEffect(() => {
    if (isLoading) {
      setFilteredEvents([]);
      return;
    }
    const sortedEvents = [...registeredEvents].sort((a, b) => {
      const dateA = moment(a.date, 'DD-MM-YYYY');
      const dateB = moment(b.date, 'DD-MM-YYYY');
      return dateA - dateB;
    });
    setFilteredEvents(sortedEvents);
  }, [registeredEvents, isLoading]);
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredEvents(registeredEvents);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = registeredEvents.filter(
        (event) =>
          (event.title && event.title.toLowerCase().includes(lowerCaseQuery)) ||
          (event.organization && event.organization.name.toLowerCase().includes(lowerCaseQuery))
      );
      setFilteredEvents(filtered);
    }
  };
  const markedDates = useMemo(() => {
    const marks = {};
    registeredEvents.forEach((event) => {
      if (!event.date) return;
      const date = moment(event.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
      if (marks[date]) {
        marks[date].dots.push({ key: event.eventId, color: theme.colors.primary });
      } else {
        marks[date] = {
          dots: [{ key: event.eventId, color: theme.colors.primary }],
          marked: true,
        };
      }
    });
    return marks;
  }, [registeredEvents, theme.colors.primary]);
  const calendarTheme = useMemo(
    () => ({
      backgroundColor: theme.colors.surface,
      calendarBackground: theme.colors.surface,
      textSectionTitleColor: theme.colors.onSurfaceVariant,
      selectedDayBackgroundColor: theme.colors.primary,
      selectedDayTextColor: theme.colors.onPrimary,
      todayTextColor: theme.colors.primary,
      dayTextColor: theme.colors.onSurface,
      textDisabledColor: theme.colors.onSurfaceVariant,
      dotColor: theme.colors.primary,
      selectedDotColor: theme.colors.onPrimary,
      arrowColor: theme.colors.primary,
      monthTextColor: theme.colors.onSurface,
      indicatorColor: theme.colors.primary,
      textDayFontFamily: theme.fonts.medium.fontFamily,
      textMonthFontFamily: theme.fonts.medium.fontFamily,
      textDayHeaderFontFamily: theme.fonts.medium.fontFamily,
      textDayFontWeight: theme.fonts.medium.fontWeight,
      textMonthFontWeight: theme.fonts.medium.fontWeight,
      textDayHeaderFontWeight: theme.fonts.medium.fontWeight,
    }),
    [theme]
  );
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {}
        <View
          style={[
            styles.searchBarContainer,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.onSurfaceVariant,
            },
          ]}
        >
          <TextInput
            style={[styles.searchBar, { color: theme.colors.onSurface }]}
            placeholder="Search registered events"
            placeholderTextColor={theme.colors.onSurfaceVariant}
            value={searchQuery}
            onChangeText={handleSearch}
            returnKeyType="search"
          />
          <Icon
            name="search"
            size={20}
            color={theme.colors.onSurface}
            style={styles.searchIcon}
          />
        </View>
        {}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
            <Text style={{ color: theme.colors.onSurfaceVariant, marginTop: 10 }}>
              Loading events...
            </Text>
          </View>
        )}
        {}
        {!isLoading && searchQuery.trim() === '' && (
          <RNCalendar
            key={theme.dark ? 'dark' : 'light'}
            markedDates={markedDates}
            markingType={'multi-dot'}
            theme={calendarTheme}
            enableSwipeMonths={true}
            style={styles.calendar}
            onDayPress={(day) => {
              navigation.navigate('DayEvents', { selectedDate: day.dateString });
            }}
          />
        )}
        {}
        {!isLoading && (
          <View style={styles.eventsList}>
            {filteredEvents.length > 0 ? (
              <FlatList
                data={filteredEvents}
                renderItem={({ item }) => (
                  <EventsCard
                    key={item.eventId}
                    event={item}
                    onPress={() => navigation.navigate('EventDetails', { event: item })}
                  />
                )}
                keyExtractor={(item) => item.eventId.toString()}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                contentContainerStyle={{ paddingBottom: 20 }}
              />
            ) : (
              <View style={styles.emptyContainer}>
                <Text style={{ color: theme.colors.onSurfaceVariant }}>
                  {searchQuery.trim() !== ''
                    ? 'No registered events match your search.'
                    : 'You have not registered for any events yet.'}
                </Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default CalendarTab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    padding: 16,
    marginBottom: -50,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 16,
    padding: 12,
    marginBottom: 17,
    marginLeft: 0,
    marginRight: 0,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8,
  },
  calendar: {
    borderRadius: 8,
    marginBottom: 16,
  },
  eventsList: {},
  emptyContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  loadingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  Linking,
} from 'react-native';
import {COLORS, SIZES} from '../constants';
// import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
// import RenderHtml from 'react-native-render-html';

const Quiz = ({navigation, route}) => {
  const [allQuestions, setAllQuestion] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const {id} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [progress, setProgress] = useState(new Animated.Value(0));
  // const progressAnim = progress.interpolate({
  //   inputRange: [0, allQuestions.length],
  //   outputRange: ['0%', '100%'],
  // });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    axios
      .get(`https://backend-mtkapp.herokuapp.com/api/v1/app/quiz/${id}`, {
        signal: signal,
      })
      .then(response => {
        console.log(response.data.quiz.ujiId);
        setAllQuestion(response.data.quiz.ujiId);
        setLoading(false);
      })
      .catch(err => console.log('err:', err));
    // console.log(isiSubMateri);

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{width: '100%', backgroundColor: '#E6F1F9', height: 230}}>
          <Image
            source={require('../assets/images/statistika.png')}
            style={{width: '100%'}}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#FB9646',
            borderRadius: 10,
            position: 'absolute',
            left: 20,
            top: 26,
            shadowColor: '#FB9646',
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" color={'white'} size={27} />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
            borderRadius: 40,
            position: 'absolute',
            top: 190,
          }}>
          <View style={{marginTop: 5, padding: 20}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Loading ....</Text>
          </View>
        </View>
      </View>
    );
  }
  const validateAnswer = selectedOption => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View>
        {/* Question */}
        <Text
          style={{
            fontSize: 16,
          }}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map(option => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              backgroundColor:
                option == correctOption
                  ? '#5CE482'
                  : option == currentOptionSelected
                  ? '#FB7070'
                  : '#E9F3FB',
              height: 50,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginVertical: 5,
            }}>
            <Text style={{fontSize: 16, color: 'black'}}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {option == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    fontSize: 20,
                  }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity>
          <Text
            style={{fontSize: 16, textAlign: 'center', color: '#FB9646'}}
            onPress={handleNext}>
            Selanjutnya
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  // const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%'],
  });
  const renderProgressBar = () => {
    if (showNextButton) {
      return (
        <View
          style={{
            marginBottom: 30,
          }}>
          {/* Question Counter */}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, fontWeight: '700'}}>
                Pertanyaan {currentQuestionIndex + 1}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700'}}>
                /{allQuestions.length}
              </Text>
            </View>
            <TouchableOpacity style={{}}>
              <Text
                style={{fontSize: 16, textAlign: 'center', color: '#FB9646'}}
                onPress={handleNext}>
                Selanjutnya
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              height: 8,
              borderRadius: 16,
              backgroundColor: '#E6F1F9',
            }}>
            <Animated.View
              style={[
                {height: 8, borderRadius: 16, backgroundColor: '#AFC3FB'},
                {width: progressAnim},
              ]}></Animated.View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{marginBottom: 30}}>
          {/* Question Counter */}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, fontWeight: '700'}}>
                Pertanyaan {currentQuestionIndex + 1}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700'}}>
                /{allQuestions.length}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 8,
              borderRadius: 16,
              backgroundColor: '#E6F1F9',
            }}>
            <Animated.View
              style={[
                {
                  height: 8,
                  borderRadius: 16,
                  backgroundColor: '#AFC3FB',
                },
                {
                  width: progressAnim,
                },
              ]}></Animated.View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{width: '100%', backgroundColor: '#E6F1F9', height: 230}}>
        <Image
          source={require('../assets/images/statistika.png')}
          style={{width: '100%'}}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#FB9646',
          borderRadius: 10,
          position: 'absolute',
          left: 20,
          top: 26,
          shadowColor: '#FB9646',
          elevation: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" color={'white'} size={27} />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          borderRadius: 40,
          position: 'absolute',
          top: 190,
        }}>
        <View style={{padding: 20}}>
          {/* Progress Bar */}
          {renderProgressBar()}

          {/* Question */}
          {renderQuestion()}

          {/* Options */}
          {renderOptions()}

          {/* Next Button */}
          {/* {renderNextButton()} */}

          {/* Score Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: '90%',
                  borderRadius: 20,
                  padding: 20,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                  {score > allQuestions.length / 2
                    ? 'Congratulations!'
                    : 'Oops!'}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginVertical: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 30,
                      color:
                        score > allQuestions.length / 2
                          ? COLORS.success
                          : COLORS.error,
                    }}>
                    {score}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: COLORS.black,
                    }}>
                    / {allQuestions.length}
                  </Text>
                </View>
                {/* Retry Quiz button */}
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      `https://api.whatsapp.com/send?text=Nilai%20Saya%20${score}`,
                    );
                  }}
                  style={{
                    backgroundColor: COLORS.accent,
                    padding: 20,
                    width: '100%',
                    borderRadius: 20,
                    marginBottom: 20,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',

                      fontSize: 20,
                    }}>
                    Kirim Nilai
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MTK');
                  }}
                  style={{
                    backgroundColor: COLORS.accent,
                    padding: 20,
                    width: '100%',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',

                      fontSize: 20,
                    }}>
                    Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default Quiz;

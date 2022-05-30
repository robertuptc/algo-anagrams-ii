# Don't forget to run the tests (and create some of your own)

from ast import JoinedStr
from operator import indexOf


def anagrams_for(word, list_of_words):
	answer = []
	sort_word = ("".join((sorted(word))))


	for i in range(0, len(list_of_words), 1) :
		idx_word = ("".join(sorted(list(list_of_words[i]))))
		if idx_word == sort_word :
			answer.append(list_of_words[i])
	
	return answer


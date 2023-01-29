#!/usr/bin/env python
# coding: utf-8

# In[1]:


import cv2
import re
import pandas as pd
import pytesseract
pytesseract.pytesseract.tesseract_cmd = 'tesseract.exe'


# ### Sequence:
# 1. Import Image
# 2. Convert Image to text
# 3. Filter through image to get the letter grade 
# 4. Pass through if statement: If True append a 1 to the food column, 0 otherwise
# 

# In[2]:


data = {'Name': ["John Smith", "Amine Kobeissi",'Alice Ferry','Johnny Dang', "Constance Frachon", "Yasmeen Kobeissi", "Tina Ho",'Herenui Cayrou', "Hereiti Cayrou", "Kessy Clark"], 
        #'GPA': ["3", "1.00","4.00","4.00","4.00", "2.7", "4", "3.8", "3.9", "3.95"],
        'Grade':["B+", "F","A","A", "A", "B-", "F", "A", "A-", "Failed"], 
        'Food?':[0, 1, 0, 0, 0, 0,  1, 0, 0, 1]
       }

# pass column names in the columns parameter 
df = pd.DataFrame(data)
df


# In[3]:


def image(file):
    img = cv2.imread(file)
    text = pytesseract.image_to_string(img)
    return text


# In[4]:


def find_letter(letter, text):
    return any(letter in word for word in list1)


# In[5]:


#Student ID
studentID = image('StudentID_McH.jpg')


# In[6]:


image('StudentID_McH.jpg')


# In[7]:


#Transcript
test111 = image('Student-transcript-with-border.webp')
test111


# In[8]:


grade = re.findall(' F ', test111)[0]


# In[9]:


test1 = re.findall('F', image('Student-transcript-with-border.webp'))[0]
test1


# In[12]:


#Inputs
name = "Harry DeBear"
full = studentID

if name in studentID and test111:
    new_row = {'Name':name,"Grade":test1,"Food?":1}
    df = df.append(new_row, ignore_index=True)
else:
    new_row = {'Name':name,"Grade":test1,"Food?":0}
    df = df.append(new_row, ignore_index=True)


# In[13]:


df


# In[ ]:





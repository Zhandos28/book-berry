import React from 'react'
import { Box, Button, Typography, Card, CardActions, CardMedia, CardContent, ButtonGroup } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import reactStringReplace from 'react-string-replace';

const data = [{
    "id": "547317",
    "title": "Moodle. E-Learning Course Development",
    "author": "William Rice",
    "author_firstname": null,
    "author_lastname": "",
    "author_middlename": "",
    "categories": "Компьютерная литература",
    "volume": "",
    "year": "2006",
    "edition": "",
    "language": "en",
    "extension": "pdf",
    "pages": "252",
    "filesize": "5984919",
    "md5": "369AE7B65CA28EF278DA86AF859924FF",
    "series": "",
    "periodical": "",
    "file_extension": "pdf",
    "url": "https://cdn.f.kz/prod/2307/2306879_550.jpg",
    "description": "A complete guide to successful learning using Moodle - Straight-forward coverage of installing and using the Moodle system   - Working with Moodle features in all learning environments   - A unique course-based approach focuses your attention on designing well structured, interactive, and successful courses<P>    <P>A complete guide to successful learning using Moodle, focused on course development and delivery and using the best educational practices. Moodle is relatively easy to install and use, but the real challenge is to develop a learning process that leverages its power and maps effectively onto the content established learning situation. This book guides you through meeting that challenge.<P>    <P>This unique book gives you more than just a guide to the  Moodle software; it uses Moodle as a route to better teaching, more motivated students, and more successful courses. Moodle is the leading Open Source learning management system. Using Moodle, teachers can easily construct richly textured web based courses.  A course can consist of a number of lessons, with each lesson including reading materials; activities such as quizzes, tests, surveys, and projects; and social elements that encourage interaction and group work between students.Moodle E-Learning Course Development shows you how to use Moodle as a tool to enhance your teaching. It will help you analyse your students' requirements, and come to an understanding of what Moodle can do for them. After that you'll see how to use every feature of Moodle to meet your course goals.<P>    <P>The social constructionist learning philosophy is at the heart of Moodle: we all \"construct\" knowledge through interation with one another and with learning materials in a social way. Moodle E-Learning Course Develelopment will show you how to add static learning material, interactive activities, and social features to your courses so that students reach their learning potential. Whether you want to support traditional class teaching or lecturing, or provide complete online and distance learning courses, this book will prove a powerful resource throughout your use of Moodle.<P>    <P>- Understand what Moodle can do, how it compares to other e-learning packages, and how it can support your teaching strategies   - Install the Moodle software on your own computer or a server, and understand your way around it   - Know how to create different kinds of courses. Moodle can support courses where the group works through the classes with a shared schedule, or where individual students work through at their own pace, or courses where students are free to explore the different topics in their own time. This book will show you how.   - Understand all of Moodle's learning features. Moodle provides features for managing course content, interactive resources, and social activities such as forums and wikis. This book explains what each of these features are, how they work, and most importantly how and when to use them effectively.   - Manage students – so that you can ensure that the right students are going to the right classes; allow students to enrol themselves, or invite students to join a course. You can even set up commercial courses where students pay to sign <P>    <P>William Rice is an experienced trainer and expert on learning and teaching practices. This experience and expertise forms the foundation of his approach: What do we want to teach? How would this best translate into a course? How best can Moodle support these course objectives?Of course, the book contains everything you'd expect from an introduction to Moodle: clear step-by-step instructions, plenty of screenshots, explanations and guides through the many features and options that you have to choose from. Throughout the book, William develops an example course. He uses this example to explore the sort of decisions, design considerations, and thought that goes into developing a successful course.<P>    <P>This book is written for everyone who wants to get the most from Moodle. Beginners to the software will get a thorough guide to how the software works, and some great ideas for getting to a good start with their first course. More experienced Moodlers will find powerful insights into developing more successful and educational courses.<P>",
    "convertTo": {
    "epub": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=EPUB&download=1",
    "fb2": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=FB2&download=1",
    "mobi": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=MOBI&download=1",
    "txt": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=TXT&download=1",
    "rtf": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=RTF&download=1"
    },
    "cover": "http://libgen.org/covers/119000/369ae7b65ca28ef278da86af859924ff-d.jpg"
    },
    {
    "id": "547317",
    "title": "Moodle. E-Learning Course Development",
    "author": "William Rice",
    "author_firstname": null,
    "author_lastname": "",
    "author_middlename": "",
    "categories": "Компьютерная литература",
    "volume": "",
    "year": "2006",
    "edition": "",
    "language": "en",
    "extension": "pdf",
    "pages": "252",
    "filesize": "5984919",
    "md5": "369AE7B65CA28EF278DA86AF859924FF",
    "series": "",
    "periodical": "",
    "file_extension": "pdf",
    "url": "https://cdn.f.kz/prod/2307/2306879_550.jpg",
    "description": "A complete guide to successful learning using Moodle - Straight-forward coverage of installing and using the Moodle system   - Working with Moodle features in all learning environments   - A unique course-based approach focuses your attention on designing well structured, interactive, and successful courses<P>    <P>A complete guide to successful learning using Moodle, focused on course development and delivery and using the best educational practices. Moodle is relatively easy to install and use, but the real challenge is to develop a learning process that leverages its power and maps effectively onto the content established learning situation. This book guides you through meeting that challenge.<P>    <P>This unique book gives you more than just a guide to the  Moodle software; it uses Moodle as a route to better teaching, more motivated students, and more successful courses. Moodle is the leading Open Source learning management system. Using Moodle, teachers can easily construct richly textured web based courses.  A course can consist of a number of lessons, with each lesson including reading materials; activities such as quizzes, tests, surveys, and projects; and social elements that encourage interaction and group work between students.Moodle E-Learning Course Development shows you how to use Moodle as a tool to enhance your teaching. It will help you analyse your students' requirements, and come to an understanding of what Moodle can do for them. After that you'll see how to use every feature of Moodle to meet your course goals.<P>    <P>The social constructionist learning philosophy is at the heart of Moodle: we all \"construct\" knowledge through interation with one another and with learning materials in a social way. Moodle E-Learning Course Develelopment will show you how to add static learning material, interactive activities, and social features to your courses so that students reach their learning potential. Whether you want to support traditional class teaching or lecturing, or provide complete online and distance learning courses, this book will prove a powerful resource throughout your use of Moodle.<P>    <P>- Understand what Moodle can do, how it compares to other e-learning packages, and how it can support your teaching strategies   - Install the Moodle software on your own computer or a server, and understand your way around it   - Know how to create different kinds of courses. Moodle can support courses where the group works through the classes with a shared schedule, or where individual students work through at their own pace, or courses where students are free to explore the different topics in their own time. This book will show you how.   - Understand all of Moodle's learning features. Moodle provides features for managing course content, interactive resources, and social activities such as forums and wikis. This book explains what each of these features are, how they work, and most importantly how and when to use them effectively.   - Manage students – so that you can ensure that the right students are going to the right classes; allow students to enrol themselves, or invite students to join a course. You can even set up commercial courses where students pay to sign <P>    <P>William Rice is an experienced trainer and expert on learning and teaching practices. This experience and expertise forms the foundation of his approach: What do we want to teach? How would this best translate into a course? How best can Moodle support these course objectives?Of course, the book contains everything you'd expect from an introduction to Moodle: clear step-by-step instructions, plenty of screenshots, explanations and guides through the many features and options that you have to choose from. Throughout the book, William develops an example course. He uses this example to explore the sort of decisions, design considerations, and thought that goes into developing a successful course.<P>    <P>This book is written for everyone who wants to get the most from Moodle. Beginners to the software will get a thorough guide to how the software works, and some great ideas for getting to a good start with their first course. More experienced Moodlers will find powerful insights into developing more successful and educational courses.<P>",
    "convertTo": {
    "epub": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=EPUB&download=1",
    "fb2": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=FB2&download=1",
    "mobi": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=MOBI&download=1",
    "txt": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=TXT&download=1",
    "rtf": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F119000%2F369ae7b65ca28ef278da86af859924ff&input_format=pdf&output_format=RTF&download=1"
    },
    "cover": "http://libgen.org/covers/119000/369ae7b65ca28ef278da86af859924ff-d.jpg"
    }
]

export default function Account({activeBtn, changeBtn}) {
  return (
    <div style={{backgroundImage:"linear-gradient( #00C2FF, #019CF3)"}}>
        <Header activeBtn={activeBtn} changeBtn={changeBtn}/>
        <Box sx={{px:"9%", display:"block", py:"2%"}}>
            <Typography sx={{color:"white", fontSize:30}}>
                My Account
            </Typography>
            <Typography sx={{color:"white", fontSize:22, mt:1}}>
                My reading books
            </Typography>
            <Card sx={{display:"block", px:"auto", backgroundColor:"inherit", my:1, border:"none", boxShadow: "none"}}>
                {
                    data.map((book) => ( 
                    <Box key={book.id} sx={{display:"flex", position:"relative", pb:5, mt:1}}>  
                        <CardActions sx={{display:"block", py:2}}>    
                            <CardMedia
                                component="img"
                                height="185"
                                image={book.url}
                                alt={book.title}
                                sx={{width:140, mx:"auto", my:1}}
                            />
                        </CardActions>
                        <CardContent sx={{color:"white", fontSize:16, maxHeight:242, maxWidth:800, overflow:"hidden"}}>
                            <Typography sx={{fontSize:19}}>
                                The book "{book.title}" {book.author}
                            </Typography>
                            {reactStringReplace(book.description, '<P>', (match, i) => (<br/>))}
                        </CardContent>
                        <Button variant="contained" size="small" sx={{backgroundColor:"white", borderRadius:1, width:128, color:'black', position:"absolute", bottom:45, right:20}}>
                            READ
                        </Button>
                    </Box>  
                   ))
                }
            </Card>
        </Box>
        <Footer/>
    </div>
  )
}

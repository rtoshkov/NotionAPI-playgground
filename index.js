import {} from 'dotenv/config'
import {Client} from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY})

const databaseId = process.env.NOTION_DATABASE_ID;

async function addItem(text) {
    try {
        const response = await notion.pages.create({
            parent: {database_id: databaseId},
            properties: {
                title: {
                    title:[
                        {
                            'text': {
                                'content': text
                            }
                        }
                    ]
                },
            },
            children: [
                // First bullet item
                {
                    object: "block",
                    type: "bulleted_list_item",
                    bulleted_list_item: {
                        'rich_text': [{
                            'type': 'text',
                            'text': {
                                'content': 'Lacanito kale',
                                'link': null
                            }
                        }]
                    },
                },
                // Second bullet item
                {
                    object: "block",
                    type: "bulleted_list_item",
                    bulleted_list_item: {
                        'rich_text': [{
                            'type': 'text',
                            'text': {
                                'content': 'Lacanito kale 2',
                                'link': null
                            }
                        }]
                    },
                }
            ]
        })
        console.log(response)
        console.log('Success! Entry added')
    }catch(error){
        console.log(error.body)
    }
}


addItem('Test4');



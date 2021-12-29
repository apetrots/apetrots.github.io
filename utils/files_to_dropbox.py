import dropbox
import sys
from bs4 import BeautifulSoup
from dropbox import DropboxOAuth2FlowNoRedirect

# APP_KEY = sys.argv[1]
# APP_SECRET = sys.argv[2]

# auth_flow = DropboxOAuth2FlowNoRedirect(APP_KEY, APP_SECRET)

# authorize_url = auth_flow.start()
# print("Go to: " + authorize_url)
# auth_code = input("Enter code: ").strip()

# try:
#     oauth_result = auth_flow.finish(auth_code)
# except Exception as e:
#     print('Error: %s' % (e,))
#     exit(1)

# print("Access token: " + oauth_result.access_token)

APP_TOKEN = sys.argv[1]
FOLDER_PATH = sys.argv[2]
HTML_PATH = sys.argv[3]

with open(HTML_PATH, 'r+') as html_doc:
    soup = BeautifulSoup(html_doc, 'html.parser');

with dropbox.Dropbox(oauth2_access_token=APP_TOKEN) as dbx:
    dbx.users_get_current_account()
    print("Set up client")
    for img in soup.find_all('img'):
        src = img.get('src');
        
        for response in dbx.files_list_folder("/" + FOLDER_PATH).entries:
            if src == response.name:
                link = dbx.sharing_create_shared_link(response.path_display).url
                link = link.replace("?dl=0", "?raw=1")
                print(link);
                img['src'] = link

print(soup)
with open(HTML_PATH + "_edit", "wb") as output:
    output.write(soup.prettify("utf-8"))  
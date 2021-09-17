# 嵌套生成sidebar
import os
import json

print(__file__)
docs_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'docs')


def get_markdown_name(file_path):
    with open(file_path, 'r') as f:
        for i in f.readlines():
            if i.startswith('#'):
                return i.strip().replace('# ', '').capitalize()
    print('请检查文件{}格式, 为了正确生成目录, 首行必须以#开头, markdown的标题'.format(file_path))


def get_sidebar_item(file_dir):
    group_link = file_dir.split('docs')[-1]
    files = os.listdir(file_dir)
    children = []
    group_text = None
    for file in files:
        if file=='.vuepress':
            pass
        elif file=='README.md':
            group_text = get_markdown_name(os.path.join(file_dir, file))
            pass
        elif file.endswith('.md'):
            title_name = get_markdown_name(os.path.join(file_dir, file))
            child_item = {'text': title_name, 'link': os.path.join(group_link, file)}
            children.append(child_item)
        else:
            # 文件夹
            new_dir = os.path.join(file_dir, file)
            children.append(get_sidebar_item(new_dir))
    if group_text is None:
        group_text = group_link.split('/')[-1].split('.')[0].capitalize()
    children.sort(key=lambda k: k['text'])
    sidebar_item = {
        'text': group_text,
        'link': group_link,
        'children': children
    }
    return sidebar_item


def get_custom_sidebar_item(file_dir):
    group_link = file_dir.split('docs')[-1]
    files = os.listdir(file_dir)
    children = []
    group_text = None
    for file in files:
        if file=='.vuepress':
            pass
        elif file=='README.md':
            group_text = get_markdown_name(os.path.join(file_dir, file))
        elif file.endswith('.md'):
            title_name = get_markdown_name(os.path.join(file_dir, file))
            child_item = {'text': title_name, 'link': os.path.join(group_link, file)}
            children.append(child_item)
        else:
            # 文件夹, 此处延续固定目录的逻辑, 不做自适应, 这样方便返回上级
            new_dir = os.path.join(file_dir, file)
            children.append(get_sidebar_item(new_dir))
    if group_text is None:
        group_text = group_link.split('/')[-1].split('.')[0].capitalize()
    children.sort(key=lambda k: k['text'])
    sidebar_item = {
        'text': group_text,
        'link': group_link,
        'children': children
    }
    return sidebar_item


def get_navbar_item(file_dir):
    '''
    一级文件夹作为导航栏
    '''
    navbars = []
    files = os.listdir(file_dir)
    for file in files:
        if file=='.vuepress':
            pass
        elif file=='README.md':
            pass
        elif file.endswith('.md'):
            pass
        else:
            # 文件夹
            nav_name = file.capitalize()
            nav_link = '/{}/'.format(file)
            navbars.append({
                'text': nav_name,
                'link': nav_link
            })
    
    return navbars


sidebars = get_sidebar_item(docs_dir).get('children')
navbars = get_navbar_item(docs_dir)
custom_sidebars = {}
for navbar in navbars:
    sub_dir = os.path.join(docs_dir, navbar.get('link')[1:-1])
    # 把navbar也加上, 方便返回
    custom_sidebar = [navbar]
    print(get_custom_sidebar_item(sub_dir), sub_dir)
    custom_sidebar.extend(get_custom_sidebar_item(sub_dir).get('children'))
    custom_sidebars[navbar.get('link')] = custom_sidebar

print(sidebars)
print(custom_sidebars)
print(navbars)

'''
sidebars 固定目录, 按文件夹展示
custom_sidebars 根据所在目录, 实时调整目录, 配合导航栏使用(只配合导航栏, 再深层级不做调整, 为了方便返回上一级)
NavbarConfig    右上角的导航栏
'''

with open('./docs/.vuepress/configs/sidebar.js', 'w') as f:
    # f.write('const SidebarConfig='+ str(sidebars)+ ';')
    f.write('const SidebarConfig='+ str(custom_sidebars)+ ';')
    f.write('const NavbarConfig='+ str(navbars)+ ';')
    f.write('module.exports = {SidebarConfig, NavbarConfig};')

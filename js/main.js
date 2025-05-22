function appendToIndex(row)
{
    const date = new Date(row['updatedAt'].split('-'))
    const month = date.toLocaleString('default', { month: 'long' });
    const dateStr = month + ' ' + date.getDate() + ', ' + date.getFullYear();
    $('#loadedIndex').append(`<li> ${dateStr} - <a href="${row['url']}">${row['title']}</a> </li>`);
}

function appendToArticles(row)
{
    const date = new Date(row['updatedAt'].split('-'))
    const month = date.toLocaleString('default', { month: 'long' });
    const dateStr = month + ' ' + date.getDate() + ', ' + date.getFullYear(); 
    var preview = "";
    $.ajax({
        url: row['url'],
        type: 'get',
        async: false,
        success: function(html) {
            preview = $(html).filter("#preview")[0].innerHTML;
        }
    });
    $('#loadedArticles').append(`<div class="tab"><h3><a class="articleLinkl" href="${row['url']}"> ${row['title']}</a></h3> <p class=\"closer\""><i>${dateStr}</i></p> <div> ${preview}</div></div><hr>`);
}

async function loadArticlesAndIndex(tags, articleCount)
{
    const sqlPromise = initSqlJs({
        locateFile: file => '/js/sql-wasm.wasm'
    });
    const dataPromise = fetch("/blog.db").then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
    const db = new SQL.Database(new Uint8Array(buf));

    // Run a query without reading the results
    var tagQuery = "";
    for (var i = 0; i < tags.length; i++) {
        tagQuery += `tag_id = (SELECT tag_id FROM tags WHERE (title = '${tags[i]}')) ${i + 1 < tags.length ? "OR " : ""}`;
    }

    const stmt = db.prepare(`SELECT * FROM articles WHERE article_id IN (SELECT article_id FROM article_tag WHERE ${tagQuery}) ORDER BY updatedAt DESC;`);

    for(var i = 0; i < articleCount && stmt.step(); i++) {
        const row = stmt.getAsObject();
        appendToArticles(row);
        appendToIndex(row);
    }

    // TODO: why is this necessary?

    // get the rest of the rows
    while(stmt.step()) {
        const row = stmt.getAsObject();
        appendToIndex(row);
    }
}

$(function(){
    // $("#includedContent").load("/articles/devlog-1-scavenger.html #preview"); 
});

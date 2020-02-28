class Member {
    constructor(json,id) {
        this.title = json.title;
        this.id = json.userID;
        this.description = json.description;
        this.country = json.country;
        this.city = json.city;
        this.endHour = json.end_time;
        this.startHour = json.start_time;
        this.tags = json.tags;
        this.socialIconLinks = json.social_links;
        this.user_email = json.user_email;
        this.user_name = json.user_name;
        this.doc_id = id
    }
}

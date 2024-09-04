import schedule
import time
from plyer import notification

def remind_task(task_name):
    notification.notify(
        title="Reminder",
        message=f"Waktunya untuk {task_name}!",
        timeout=10
    )

def setup_schedule():
    schedule.every().monday.at("19:00").do(remind_task, "Review rencana harian & Prioritas")
    schedule.every().tuesday.at("19:00").do(remind_task, "Review rencana harian & Prioritas")
    schedule.every().wednesday.at("19:00").do(remind_task, "Review rencana harian & Prioritas")
    schedule.every().thursday.at("19:00").do(remind_task, "Review rencana harian & Prioritas")
    schedule.every().friday.at("19:00").do(remind_task, "Review rencana harian & Prioritas")
    schedule.every().saturday.at("19:00").do(remind_task, "Review rencana harian & Prioritas")
    schedule.every().sunday.at("19:00").do(remind_task, "Review rencana harian & Prioritas")

    schedule.every().monday.at("19:30").do(remind_task, "Belajar AI / Crypto")
    schedule.every().tuesday.at("19:30").do(remind_task, "Proyek Landing Page / Marketplace")
    schedule.every().wednesday.at("19:30").do(remind_task, "Belajar Web3 / Blockchain")
    schedule.every().thursday.at("19:30").do(remind_task, "Proyek Landing Page / Marketplace")
    schedule.every().friday.at("19:30").do(remind_task, "Belajar Energi Terbarukan")
    schedule.every().saturday.at("19:30").do(remind_task, "Belajar FB Ads")
    schedule.every().sunday.at("19:30").do(remind_task, "Proyek Freelance / Microtasks")

    # Repeat similar scheduling for other tasks...

def run_bot():
    setup_schedule()
    while True:
        schedule.run_pending()
        time.sleep(1)

if __name__ == "__main__":
    run_bot()
